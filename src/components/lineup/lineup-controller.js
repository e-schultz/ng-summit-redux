import lineupActions from '../../actions/lineup-actions';

export default class LineupController {
  constructor($ngRedux, $scope) {

    let disconnect = $ngRedux.connect(
        state => this.onUpdate(state),  // What we want to map to our target
        lineupActions                   // Actions we want to map to our target
        )(this);                        // Our target
    
    $scope.$on('$destroy', disconnect); // Cleaning house
  }

  onUpdate(state) {
    return {
      parties: state.lineup,
      numberOfPeople: null // dont have this initially
    };
  }
};

/*
Now that our application is aware of ngRedux, lets setup our first component to display
the lineup.

First, lets take a quick look at the application so far

// global-debug state thing

The ng-redux connect API is fairly flexible, and allows us to automatically bind
state and actions to the scope of the controller.

The syntax is:

$ngRedux.connect(mapStateToTarget, [mapDispatchToTarget])(target)

the mapStateToTarget is executed when there is a change state in the application,
this must return a plain-JS object, as ngRedux will bind this to the controller scope
after every detected update.

However, ng-redux will only automatically bind things to the scope again if it detects
a change between the results of this function // make less clunky.

In this example, the lineup.parties will be bound to the state

Lets setup a simple template // blah blah,

right now though we have no parties, but just for sake of example lets manually put one in...


 $ngRedux.dispatch({
      type: '@@ngSummitRedux/partyJoined',
      payload: {
        id: 1,
        numberOfPeople: 3
      }
    });


---

We will be using the mapDispatchToTarget, so lets make our lineup-actions available as an angular 
service,

// show actions/index.js

we want to start being able to add people to the lineup,
lets add a simple input field and button.

 <input ng-model="lineup.numberOfPeople">
 <button type="button" ng-click="lineup.joinLine(lineup.numberOfPeople)">New Party</button>


Sicne we are using the mapDispatchToTarget, the function 'joinLine' is now available,

we can now enter in the number of people, and get them added to the list.

Since we don't want to have to manually clear out the numberOfPeople every time,
lets add this to our mapStateToTarget function, and set it to null.


// maybe show quick example of two lineup-directives ?

// todo - unit-tests for this part

One of the powerful ideas with reactive architecture, and redux - is the ability to
create new components and functionality that is dervied from the application state.

Before getting into seating our guests, lets make a simple component to show
the total number of people in lne.

// onto lineup-summary.js


TODO:

* think I will leave 'seat party' out of the lineup list, and have it in the diningroom/table --- 
  but when a party is seated, they automatically
  get removed from the list. Leave 'leave line' in though for sake of demo?

*/
