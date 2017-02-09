# Test task RSS-reader (Javascript Junior developer)

Implement in JavaScript simple interface for reading RSS-channels (in any version of RSS or Atom, one of your choice).

Any ready-made components can be used in the implementation. Make sure to specify clearly what  ready-made components were used, their names and official sites.

Application page is divided into four parts - the channel list (with editing), the list of messages in the selected channel, viewing the selected message, statistics.
The number of channels.
For the selected channel: the number of messages, the number of authors.
For the selected message: pie chart of the relative frequency of occurrence of the latin alphabet in the message (after conversion to lower case).
(Each letter takes a share of the area of a circle, equal to the ratio of the number of latin letters to the total number of letters / not characters  / in the message.)

# How to run:

To run this project you must have installed [mongodb](http://www.mongodb.com/).

Before run this project run ``` mongod.exe ```

Next step, you need install all needed modules for project. Run this command in the folder of the project:

``` npm install ```

Next step, to generate initial data for database run this command in the folder of project:

``` node ./backend/seed/seed.js ```

And last step, run this command to run the project:

``` node server.js ``