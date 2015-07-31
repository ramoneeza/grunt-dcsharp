/*
 * grunt-dcsharp
 * https://github.com/Ramon/grunt-dcsharp
 *
 * Copyright (c) 2015 Ramon Ordiales
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('dcsharp', 'Launch CSharp Tasks from grunt. Requires C# 6.0 / .NET 4.6', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      log: true
    });
    var that = this;
    var start = Date.now();
    var taskfile=this.data.taskfile;
    var task=this.data.task;
    var done=this.async();
    var param = {
      cmd: 'DCSharp.exe',
      args: [taskfile,task],
      opts: {
        env: process.env
      }
    };

  // make a child
    grunt.log.writeln('DCSharp start');
    grunt.log.write(taskfile);
    grunt.log.write(" ");
    grunt.log.writeln(task);

  var fail=true;
  var child = grunt.util.spawn(param,
    function (err, res, code) {
        grunt.log.writeln('Sub done ');
        grunt.log.writeln(String(res));
      if (err || code !== 0) {
        fail = true;
      }
      else {
        fail = false;
      }
      // bye
      done();
    }
  	);
    
  });

};
