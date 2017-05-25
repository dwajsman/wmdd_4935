# assignment one
## mini CMS/static site generator

using what you have learned so far you are going to create your own simple CMS
or static site generator.

what you are creating as a CMS is what is commonly referred to as a 'flat file
cms'. they are called this because your content primarily exists as files as
opposed to in a database. for a website or blog, many people prefer this approach because they are
considerably faster and more secure in comparison to something like wordpress.

write a program that takes HTML templates and inserts the text from your .txt
files into new HTML files in the build directory. in addition to the pages you
should use the names of the files themselves to create an index.html file with a
list of your blog posts.if you are making a static site generator you run your
code and it builds your files. if you are making a CMS your code should
continually watch a directory and convert new pages when a new file is added.

you can use separate html templates or use template literals in your code, or
template literals that are JavaScript modules.

you don't need CSS, you are being graded on your JavaScript.

you can use lorem ipsum, or content copied from another source in your blog txt files, a paragraph per file is
sufficient. 

for this assignment you only need 3 txt files, but this is to be programmed with
the idea that you could use this project to generate an ongoing blog, adding articles by
adding a new txt file and running your program again.

running your program a second time should not produce duplicate files, or if you
are making a CMS adding a new file should not trigger duplication so that your
list of blog entries has every blog only once.

## optional additional functionality

instead of using a .txt file and the fs module you could use markdown for your
posts and a module to convert your posts from markdown into html.
search `markdown` at [npmjs](https://www.npmjs.com/)

(static only option)make this a functioning command line application hints: google 'shebang node', make it
executable with `chmod`.

use a build script in a package.json to run your code, google 'NPM script'

make your application serve your content as well as create it.

there are of course numerous additional features that you could add that would
make your application more useful, performant, secure... but keep in mind that
you have a little more than a week to complete this assignment.

## project structure

- assign-01/
  - app.js
  - about.txt
  - templates/
    - index_h.html
    - index_f.html
    - post_h.html
    - post_f.html
  - posts/
    - post_one.txt
    - post_two.txt
    - post_three.txt
  - build/
    - your html files ready to be served here.

## submission
submit the above project structure in a directory titled 'assign-01' using the
student share hand-in folder.

the 'about.txt' should include your name, email address, student number and any
information I need to test your project.

if you use third party modules please include your package.json, but not the
node_modules directory.

this won't take some of you very long, but it is still better not to leave it
until the last minute.

### due date Friday June 02 Midnight

