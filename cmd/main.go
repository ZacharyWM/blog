package main

import (
	"os"
	"path"
	"path/filepath"
	"strings"

	"github.com/gin-gonic/gin"
)

func main() {
	dir, err := filepath.Abs(filepath.Dir(os.Args[0]))
	if err != nil {
		panic(err)
	}
	dir = strings.TrimSuffix(dir, "tmp")

	r := gin.Default()

	r.StaticFile("/assets/app.js", path.Join(dir, "frontend/build/App.js"))
	r.StaticFile("/assets/output.css", path.Join(dir, "frontend/build/style.css"))
	r.StaticFile("/", path.Join(dir, "frontend/index.html"))

	r.GET("/healthcheck", func(c *gin.Context) {
		c.String(200, "OK")
	})

	r.Run() // listen and serve on 0.0.0.0:8080
}
