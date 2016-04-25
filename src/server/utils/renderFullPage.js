export default function renderFullPage(html) {
	return (
	`<!doctype html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>Digital Dash</title>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
			<link href='https://fonts.googleapis.com/css?family=Lato:400,300,700|Dosis:200,300' rel='stylesheet' type='text/css'>
			<link rel="stylesheet" href="/styles/style.css?v=1.0">
		</head>
		<body>
			<div id="app">${html}</div>
			<script src="bundle.js"></script>
		</body>
	</html>`
	);
}
