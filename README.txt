Quick & dirty example of using phantomjs to scrape webpages,
change the layout, and print them to pdf’s.

Usage, from the command line:

    phantomjs render_courses_list.js

Use something like pdftk to collate them together into one pdf:

    pdftk *.pdf cat output overzicht-ects-universiteit-leiden-eric-schrijver.pdf
