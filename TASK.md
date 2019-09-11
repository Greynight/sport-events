# Building a sportsbook lobby
This assignment is intended to be the foundation for a discussion with a co-worker at Gametek.
Your job is to create the first iteration of a sportsbook lobby. We provide you with the data, the rest is up to you.
You'll find the data you need in `lib`.

## Prerequisites
We encourage you to do your own interpretation, there is no right or wrong. Make use of a framework or go vanilla, it's up to you!
You also decide where in the stack you want to put the most effort.

## Requirements
All requirements are listed in order of importance/priority to a thought Product Owner.
Determine which ones are feasible to complete in your sprint. Your sprint is 5 hours.

### Functional requirements
* it should show a list of sport events
   * it should be possible to filter the events based on `sport` (football, tennis, basketball etc)
   * it should be possible to filter the events based on `tags` (OFFERED_LIVE, OFFERED_PREMATCH, MAIN etc)
   * it should be possible to show only events with high odds to bet on (e.g. one of the odds in the bet offer is over 5.00)
* it should be responsive and functional on both mobile and desktop (click & touch)
* it should be unit tested

### Design requirements
* each sport event should be represented by a tile
* the tile should include:
    * the event name
    * the start time of the event
    * the sport the event belongs to
    * buttons showing what you can bet on (e.g. 1X2) with the corresponding odds (the odds need to be divided by 1000 and should be displayed with two decimals)
    * perhaps some other data that could be relevant for a player to know about

### Non functional requirements
* it should load fast
* should be visually appealing
