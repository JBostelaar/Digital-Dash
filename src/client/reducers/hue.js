import * as c from 'client/constants';

const initialState = {
	open_scenes: false,
};

export default function hue(state = initialState, action) {
	switch (action.type) {
	case c.SET_OPEN_SCENES:
		return { ...state,
			open_scenes: true,
		};

	case c.SET_CLOSE_SCENSE:
		return { ...state,
			open_scenes: false,
		};

	default:
		return state;
	}
}
