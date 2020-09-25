develop:
	npx webpack-dev-server

start:
	npx webpack-dev-server

install:
	npm install

build:
	rm -rf dist
	NODE_ENV=production npx webpack

test:
	npm test

.PHONY: test