package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()

	r.StaticFile("/assets/App.js", "../frontend/build/App.js")

	r.GET("/", func(c *gin.Context) {
		c.File("../views/index.html")
	})

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.Run() // listen and serve on 0.0.0.0:8080
}
