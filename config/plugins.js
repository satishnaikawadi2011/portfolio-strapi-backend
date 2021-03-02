module.exports = ({ env }) => ({
	// ...
	upload : {
		provider        : 'cloudinary',
		providerOptions : {
			cloud_name : env('CLOUDINARY_NAME', 'dh1srz69c'),
			api_key    : env('CLOUDINARY_KEY', '165632595173745'),
			api_secret : env('CLOUDINARY_SECRET', 'ClCS1JecwaOy0BDpeWoLbSVvQGo')
		},
		actionOptions   : {
			upload : {},
			delete : {}
		}
	}
	// ...
});
