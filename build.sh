mkdir -p build/frontend/build
go build -o ./build/app ./cmd/main.go
npm run build
npm run tw-build

cp ./frontend/index.html ./build/frontend/index.html
cp ./frontend/build/App.js ./build/frontend/build/App.js
cp ./frontend/build/style.css ./build/frontend/build/style.css