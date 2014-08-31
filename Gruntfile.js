module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dev: {
        options: {
          style: "expanded"
        },
        files: [{
          'build/stylesheet/total.css': 'public/stylesheet/total.scss',
        }]
      },
      dist: {
        options: {
          style: "compressed",
        },
        files: [{
          'build/stylesheet/total.css': 'public/stylesheet/total.scss',
        }]
      }
    },

    watch: {
      scss: {
        files: ['public/stylesheet/*.scss'],
        tasks: ['sass:dev'],
        options: {
          livereload: true,
        }
      },
      javascript: {
        files: 'public/javascript/**/*.js',
        tasks: ['requirejs'],
        options: {
          livereload: true,
        }
      },

      html: {
        files: 'public/*.html',
        tasks: ['env:dev', 'preprocess:html'],
        options: {
          livereload: true,
        }
      },

      images: {
        files: 'public/images/**/*',
        tasks: ['clean:images', 'copy:images'],
        options: {
          livereload: true,
        }
      },

      fonts: {
        files: 'public/fonts/**/*',
        tasks: ['clean:fonts', 'copy:fonts'],
        options: {
          livereload: true,
        }
      },

      favicon: {
        files: ['public/favicon.ico'],
        tasks: ['copy:favicon'],
        options: {
          livereload: true,
        }
      },
    },

    requirejs: {
      compile: {
        options: {
          almond: true,

          name: "main",
          mainConfigFile: "public/javascript/config.js",
          out: "build/javascript/main.min.js",

          optimize: 'none',
          generateSourceMaps: true,

          preserveLicenseComments: false,
          wrap: true
        }
      },
    },

    uglify: {
      build: {
        files: {
          'build/javascript/main.min.js': ['build/javascript/main.min.js']
        }
      }
    },

    clean: {
      map: ["build/javascript/main.min.js.map"],
      images:["build/images/"],
      fonts:["build/fonts/"],
    },

    env: {
      dev: {
        NODE_ENV: 'DEVELOPMENT'
      },

      prod: {
        NODE_ENV: 'PRODUCTION'
      }
    },

    preprocess: {
      html: {
        files: {
          'build/index.html': 'public/index.html',
          'build/blog.html': 'public/blog.html'
        }
      },
    },

    copy: {
      favicon: {
        src: 'public/favicon.ico',
        dest: 'build/favicon.ico'
      },

      images: {
        expand: true,
        flatten: true,
        filter: 'isFile',

        src: 'public/images/**/*',
        dest: 'build/images/',
      },

      fonts: {
        expand: true,
        flatten: true,
        filter: 'isFile',

        src: 'public/fonts/**/*',
        dest: 'build/fonts/',
      },

      cname: {
        filter: 'isFile',

        src: 'public/CNAME',
        dest: 'build/CNAME',
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: { // Dictionary of files
          'build/index.html': 'build/index.html',
          'build/blog.html': 'build/blog.html'
        }
      }
    },



  });

  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['env:prod', 'requirejs', 'uglify', 'clean', 'preprocess', 'htmlmin', 'sass:dist', 'copy' ]);
  grunt.registerTask('dev', ['env:dev', 'clean', 'copy', 'preprocess', 'requirejs', 'sass:dev', 'watch']);

};