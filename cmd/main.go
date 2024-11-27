package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()

	r.StaticFile("/assets/app.js", "./frontend/build/App.js")
	r.StaticFile("/assets/output.css", "./frontend/build/style.css")
	r.StaticFile("/", "./frontend/index.html")

	// r.GET("/", func(c *gin.Context) {
	// 	c.File("../frontend/index.html")
	// })

	r.GET("/healthcheck", func(c *gin.Context) {
		c.String(200, "OK")
	})

	r.Run() // listen and serve on 0.0.0.0:8080
}
