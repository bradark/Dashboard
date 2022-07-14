const stripe = require('stripe')('sk_test_51KdYUGFBmlpVwXKRngPEOtZ9SkOVTyVrfymcdLN4uaQVsz0FQtTuGq6JqNH52CvjXPtdjnmqcAllQm0mFrFCVXbS00hIAE8QgW');
const httpBuildQuery = require('http-build-query');
var path = require('path');
const userModel = require(path.resolve('../server/src/models/users/user.js'));
const db = require(path.resolve('../server/src/database/database'));

const index = (req, res) => {
	const queryData = {
		response_type: 'code',
		client_id: 'ca_LKCwIu14HeaPZ1oBK4nuo0H3Pe3MGOPc',
		scope: 'read_write',
		redirect_uri: 'https://localhost:3002/stripe/redirect'
	}
	const connectUri = config.authorizationUri + '?' + httpBuildQuery(queryData);
	res.json({ uri: connectUri, error: "true" })
}

const redirect = async (req, res) => {
	if (req.query.error) {
		req.flash('error', req.query.error.error_description)
		return res.redirect('/');
	}
	const token = await getToken(req.query.code);
	if (token.error) {
		req.flash('error', token.error)
		return res.redirect('/');
	}
	const connectedAccountId = token.stripe_user_id;
	const account = await getAccount(connectedAccountId);
	if (account.error) {
		req.flash('error', account.error)
		return res.redirect('/');
	}
    res.redirect('http:localhost:3001/profile');
    console.log(account);
    console.log(token);
	//res.json({ account: account });
}

const getToken = async (code) => {
	let token = {};
	try {
		token = await stripe.oauth.token({ grant_type: 'authorization_code', code });
	} catch (error) {
		token.error = error.message;
	}
	return token;
}

const getAccount = async (connectedAccountId) => {
	let account = {};
	try {
		account = await stripe.account.retrieve(connectedAccountId);
	} catch (error) {
		account.error = error.message;
	}
	return account;
}

module.exports = {
	index,
	redirect
}