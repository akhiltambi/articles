'use strict';

module.exports = {
	db: {
		uri: 'mongodb://mean:password@dbh45.mongolab.com:27457/articledb',//localhost/articleDB',//',
		options: {
			user: '',
			pass: ''
		}
	},
	log: {
		// Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
		format: 'dev',
		// Stream defaults to process.stdout
		// Uncomment to enable logging to a log on the file system
		options: {
			//stream: 'access.log'
		}
	},
	app: {
		title: 'Free Article Spot'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '340475982815685',
		clientSecret: process.env.FACEBOOK_SECRET || '7ad06087022bebb01c4d5fbc5e503da1',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '494239018541-shbr7k898gq68ikvv1ic37j9kiesub38.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'Cmx6N6gsiwmi-9otedX_C13S',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'gmail',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'akhiltambi@gmail.com',
				pass: process.env.MAILER_PASSWORD || '9421823688'
			}
		}
	}
};
