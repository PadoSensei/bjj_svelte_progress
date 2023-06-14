# To Do

- ~~get project on github~~
- get project deployed {
  firebase user
  }
- git discipline { - code reviews - docs - testing - use gpt / co pilot branch mgmt
  }
- connect to Bly
- create tasks / sprints

## Push Ball Forward Tasks

- Navigate the UI - pages and links
- go with pico
- Represent the data on all pages
- Create stores for game logic, pull cards from central app store so that mastery etc can be updated
- Create UI for games
- Create UI for move list
- Create modal for move pop up
- create mind map visualisation of moves
- planetary system
  {
  each guard is a sun
  each solar system has stability requirements 'gravity' 'escape solar system'
  each planet has is a sub or sweep
  each planet has moons of mystery
  click through to connect to other moves

}

## Research topics

- Figma (how can we turn a picture into a fill in the blanks html template)
- midjourney - create some layouts for figma to work with
- firebase user auth etc
- project mgmt { - UI - Auth backend - App logic - Routing / Deployment / C/I
  }
- css {
  scrimba - work the programme
  app ideas
  }

## Structure

Main - {

    Study (Dojo){
        ToDo {
            Open mat drilling for a selected move
            https://svelte.dev/repl/7eb8c1dd6cac414792b0edb53521ab49?version=3.20.1
            Add drilling points to card
            Get todo suggestions from counter
        }
        Counter{
            Did you hit the move?
            Where did you get stuck move search {
                - decision tree
                - highlight what pass or sub hit you
                - move you tried that didn't work
                - strategy check {
                    body type
                    style
                    emotion
                }
            }
        }
        Game Builder Descision Tree {
            Start in {
                Opp is {
                    Triggers {

                    }
                }
            }
            Select attack
        }
        Games {
            Memory {
                mastery <10
                each match scores a master point
            }
            Picture to Lables {
                mastery < 10 < 20
            }
            Labels to Picture {
                 mastery < 20 < 30
            }
            Test on directions {
                 mastery < 20 < 30
            }
        }
    }
    Move Gallery {
        List moves {
            Edit Moves / Add moves / Youtube card scrape
            Toggle active (to be shown in Dojo)
            Sort by best mastery / worst mastery
            https://splidejs.com/ for carosels
        }
        Mastery visualisations {
            Solar system of moves (https://github.com/heithemmoumni/svelte-mindmap/tree/master)
            Bar Charts
            Fifa stye skills circle for each guard {
                drilling / counter data
                }
            Skills tree
        }
    }

}
