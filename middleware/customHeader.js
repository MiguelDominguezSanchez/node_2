const customHeader = (
	req,
	res,
	// in middlewares the third argument 'next' is very important
	// 'next' as it is implied in the name is: let it flow
	// let it continue what you are doing
	next
) => {
	// I can place a 'next()' here and go to my route
	// console.log(req.body)
	// we can receive in the terminal the body content
	/*
  {
    name: 'Leifer',
    album: 'Album',
    cover: 'http://tttt.com',
    artist: { name: 'Leifer', nickname: 'leifermendez', nationality: 'VE' },
    duration: { start: 1, end: 0 },
    mediaId: '624084358d0f543c746b7bd8'
  }
  */
	// console.log(req.headers)

	// headers return in terminal an object:
	// {
	//   api_key: 'api-publica-123',
	//   'content-type': 'application/json',
	//   'user-agent': 'PostmanRuntime/7.29.0',
	//   accept: '*/*',
	//   'postman-token': 'a6536558-a1b0-4667-ae68-668e17038fef',
	//   host: 'localhost:3001', // FROM WHERE WE ARE DOING THE CONNECTION FROM
	//   'accept-encoding': 'gzip, deflate, br', // WHAT TYPE OF ENCODING WE ARE DOING
	//   connection: 'keep-alive', // CONNECTION
	//   'content-length': '270'
	// }
	// {
	//   name: 'Leifer',
	//   album: 'Album',
	//   cover: 'http://tttt.com',
	//   artist: { name: 'Leifer', nickname: 'leifermendez', nationality: 'VE' },
	//   duration: { start: 1, end: 0 },
	//   mediaId: '624084358d0f543c746b7bd8'
	// }
	next()

	try {
		// I want to get the apiKey from request > headers > api_key
		const apiKey = req.headers.api_key
		// if apiKey equals to 'leifer-01'
		if (apiKey === 'leifer-01') {
			// The things that are used in here
			// if the apiKay match
			// you can consult a data base
			// in order to knw the consumption of that apiKey
			// to say: ie. You  passed the day limit, week limit, you dont have the permission
			// let pass
			next()
		} else {
			// otherwise
			// return a more specific error
			res.status(403)
			res.send({ error: 'API_KEY_NO_ES_CORRECTA' })
		}
	} catch (e) {
		// if an error occurs
		// to prevent the application to linger charging
		res.status(403)
		//  response error logged
		res.send({ error: 'ALGO_OCURRIÓ_EN_EL_CUSTOM_HEADER' })
	}
}

module.exports = customHeader
