var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth:{
		user: 'imendhie@gmail.com',
		pass: 'xxxxxxxxxxxxxxxx'
	}
});

var mailOptions = {
	from: 'imendhie@gmail',
	to: 'test@gmail.com',
	subject: 'Fun App',
	text: `Hi Test,
	
		I wish to know the state of development on the app. Call when free. see demo nodemailer`
};

transporter.sendMail(mailOptions, (err, info)=>{
	if(err)
		console.log(err);
	else
		console.log('Mail sent: '+ info.response);
});