export default class PendingOrdersController {
  constructor($ngRedux, $scope) {

    let _onChange = (state) => {

      return {
        total: state.lineup.get('parties').reduce((acc, val) => acc + val.get('numberOfPeople'), 0)
      };
    };

    let disconnect = $ngRedux.connect(_onChange)(this);

    $scope.$on('$destroy', () => disconnect());
  }
};

/*
todo: something about selectors, and smart vs dumb components

We just want to sum up the total number of people in the line, so we can use immutalbes
reduce here.

// blah blah something template

Lets see how this is working...

as you can see, we are now sort of getting the total of people, but it looks like
numberOfPeople is being set to a string.

To fix this, we could do a parseInt here, but then we would need to remember 
to do it everywhere. 

Lets go adjust our lineupActions to do the conversion there

// why not do it in the store? ...

So here we have added another component to the system, and the people in line summary
is being kept in sync with the parties list, and without needing to rely on two-way
data binding.

// ... after the summary component part

Lets go back and wire up some final events on our lineup component, we'll hookup
the seat, and leave events.

// TODO:

change 'seatParty' so it's not just a remove - but prompts for the table to seat them
at --- then once seated. remove?

 */
