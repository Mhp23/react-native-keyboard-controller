import { Animated } from 'react-native';

const values = {
  animated: {
    progress: new Animated.Value(0),
    height: new Animated.Value(0),
  },
  reanimated: {
    progress: { value: 0 },
    height: { value: 0 },
  },
};
const focusedInput = {
  input: {
    value: {
      target: 1,
      layout: {
        x: 0,
        y: 0,
        width: 200,
        height: 40,
        absoluteX: 0,
        absoluteY: 100,
      },
    },
  },
};

const mock = {
  // hooks
  useKeyboardAnimation: jest.fn().mockReturnValue(values.animated),
  useReanimatedKeyboardAnimation: jest.fn().mockReturnValue(values.reanimated),
  useResizeMode: jest.fn(),
  useGenericKeyboardHandler: jest.fn(),
  useKeyboardHandler: jest.fn(),
  useReanimatedFocusedInput: jest.fn().mockReturnValue(focusedInput),
  useFocusedInputHandler: jest.fn(),
  // modules
  KeyboardController: {
    setInputMode: jest.fn(),
    setDefaultMode: jest.fn(),
  },
  KeyboardEvents: {
    addListener: jest.fn(() => ({ remove: jest.fn() })),
  },
  // views
  KeyboardControllerView: 'KeyboardControllerView',
  KeyboardGestureArea: 'KeyboardGestureArea',
  // providers
  KeyboardProvider: 'KeyboardProvider',
};

module.exports = mock;
