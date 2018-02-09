install:
	npm install

compile_js:
	./node_modules/webpack/bin/webpack.js --watch

compile_scss:
	sass -w static/scss/:static/css/

run_backend_server:
	node server.js
