import { combineReducers } from "redux";

const ADD_BIRD = "ADD_BIRD";
const INCREMENT_BIRD = "INCREMENT_BIRD";

export function addBird(bird) {
  return {
    type: ADD_BIRD,
    bird,
  };
}

export function incrementBird(bird) {
  return {
    type: INCREMENT_BIRD,
    bird,
  };
}

const defaultBirds = [
  {
    name: "robin",
    view: 1,
  },
];

function birds(state = defaultBirds, action) {
  switch (action.type) {
    case ADD_BIRD:
      return [
        ...state,
        {
          name: action.bird,
          view: 1,
        },
      ];
    case INCREMENT_BIRD:
      const bird = state.find((b) => action.type === b.name);
      const birds = state.filter((b) => action.type !== b.name);
      return [
        ...birds,
        {
          ...bird,
          view: bird.view + 1,
        },
      ];
    default:
      return state;
  }
}

const birdApp = combineReducers({
  birds,
});

export default birdApp;
