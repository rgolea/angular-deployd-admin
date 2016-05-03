module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            bowerjs: {
                src: [
                    './bower_components/angular/angular.js',
                    './bower_components/angular-animate/angular-animate.js',
                    './bower_components/angular-aria/angular-aria.js',
                    './bower_components/angular-touch/angular-touch.js',
                    './bower_components/angular-resource/angular-resource.js',
                    './bower_components/angular-material/angular-material.js',
                    './bower_components/angular-ui-router/release/angular-ui-router.js',
                    './bower_components/angular-file-data-url/src/fileDataUrl.js',
                    './bower_components/marked/lib/marked.js',
                    './bower_components/angular-marked/angular-marked.js',
                    './bower_components/ng-file-upload/ng-file-upload-all.js',
                    './bower_components/ngmap/build/scripts/ng-map.js'
                ],
                dest: './public/dist/bower.js'
            },
//            scriptsjs: {
//                src: [
//                    './public/app/**/*.js'
//                ],
//                dest: './public/dist/script.js'
//            },
              scriptsjs: {
                src: [
                    './public/app/**/*.js'
                ],
                dest: './public/dist/script.min.js'
            },
            bowercss: {
                src: [
                    './bower_components/angular-material/angular-material.css'
                ],
                dest: './public/dist/bower.css'
            },
            customcss: {
                src: [
                    './public/css/**/*.css'
                ],
                dest: './public/dist/style.css'
            }
        },
//        uglify: {
//            bowerjs: {
//                files: {
//                    './public/dist/bower.min.js': './public/dist/bower.js'
//                }
//            },
//            scriptsjs: {
//                files: {
//                    './public/dist/script.min.js': './public/dist/script.js'
//                }
//            }
//        },
        cssmin: {
            bowercss: {
                files: {
                    './public/dist/bower.min.css': './public/dist/bower.css'
                }
            },
            customcss: {
                files: {
                    './public/dist/style.min.css': './public/dist/style.css'
                }
            }
        },
        watch: {
//            scripts: {
//                files: ['./public/app/**/*.js'],
//                tasks: ['concat:scriptsjs', 'uglify:scriptsjs']
//            },
             scripts: {
                files: ['./public/app/**/*.js'],
                tasks: ['concat:scriptsjs']
            },
            css: {
                files: ['./public/css/**/*.css'],
                tasks: ['concat:customcss', 'cssmin:customcss']
            },
            html: {
                files: ['./public/app/**/*.html'],
                tasks: ['copy:html']
            },
            json: {
                files: ['./public/app/**/*.json'],
                tasks: ['copy:json']
            }
        },
        copy: {
            html: {
                cwd: './public/app/',
                src: '**/*.html',
                dest: './public/dist/app/',
                expand: true
            },
            json: {
                cwd: './public/app/',
                src: '**/*.json',
                dest: './public/dist/app/',
                expand: true
            }
        }
    });

    //Loading NPM tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    //default task
//    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'copy']);
     grunt.registerTask('default', ['concat',   'cssmin', 'copy']);
};
