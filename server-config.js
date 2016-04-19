// Put here your email sending configurations!
module.exports = {
	emailTransport: {
		host: 'mail.beyondrm.com',
		port: 25,
		auth: { user: 'manuel.schlieper@beyondrm.com', pass: 'hut30spiegel9' }
	},
	emailOptions: {
		from: 'Mosaico by VOXmail <test@mosaico.io>', // sender address
		// bcc: 'mosaico@mosaico.io',
	}
};
