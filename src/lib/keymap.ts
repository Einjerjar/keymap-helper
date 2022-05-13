const KEY_UNKNOWN = -1
const KEY_SPACE = 32
const KEY_APOSTROPHE = 39
const KEY_COMMA = 44
const KEY_MINUS = 45
const KEY_PERIOD = 46
const KEY_SLASH = 47
const KEY_0 = 48
const KEY_1 = 49
const KEY_2 = 50
const KEY_3 = 51
const KEY_4 = 52
const KEY_5 = 53
const KEY_6 = 54
const KEY_7 = 55
const KEY_8 = 56
const KEY_9 = 57
const KEY_SEMICOLON = 59
const KEY_EQUAL = 61
const KEY_A = 65
const KEY_B = 66
const KEY_C = 67
const KEY_D = 68
const KEY_E = 69
const KEY_F = 70
const KEY_G = 71
const KEY_H = 72
const KEY_I = 73
const KEY_J = 74
const KEY_K = 75
const KEY_L = 76
const KEY_M = 77
const KEY_N = 78
const KEY_O = 79
const KEY_P = 80
const KEY_Q = 81
const KEY_R = 82
const KEY_S = 83
const KEY_T = 84
const KEY_U = 85
const KEY_V = 86
const KEY_W = 87
const KEY_X = 88
const KEY_Y = 89
const KEY_Z = 90
const KEY_LEFT_BRACKET = 91
const KEY_BACKSLASH = 92
const KEY_RIGHT_BRACKET = 93
const KEY_GRAVE_ACCENT = 96
const KEY_WORLD_1 = 161
const KEY_WORLD_2 = 162
const KEY_ESCAPE = 256
const KEY_ENTER = 257
const KEY_TAB = 258
const KEY_BACKSPACE = 259
const KEY_INSERT = 260
const KEY_DELETE = 261
const KEY_RIGHT = 262
const KEY_LEFT = 263
const KEY_DOWN = 264
const KEY_UP = 265
const KEY_PAGE_UP = 266
const KEY_PAGE_DOWN = 267
const KEY_HOME = 268
const KEY_END = 269
const KEY_CAPS_LOCK = 280
const KEY_SCROLL_LOCK = 281
const KEY_NUM_LOCK = 282
const KEY_PRINT_SCREEN = 283
const KEY_PAUSE = 284
const KEY_F1 = 290
const KEY_F2 = 291
const KEY_F3 = 292
const KEY_F4 = 293
const KEY_F5 = 294
const KEY_F6 = 295
const KEY_F7 = 296
const KEY_F8 = 297
const KEY_F9 = 298
const KEY_F10 = 299
const KEY_F11 = 300
const KEY_F12 = 301
const KEY_F13 = 302
const KEY_F14 = 303
const KEY_F15 = 304
const KEY_F16 = 305
const KEY_F17 = 306
const KEY_F18 = 307
const KEY_F19 = 308
const KEY_F20 = 309
const KEY_F21 = 310
const KEY_F22 = 311
const KEY_F23 = 312
const KEY_F24 = 313
const KEY_F25 = 314
const KEY_KP_0 = 320
const KEY_KP_1 = 321
const KEY_KP_2 = 322
const KEY_KP_3 = 323
const KEY_KP_4 = 324
const KEY_KP_5 = 325
const KEY_KP_6 = 326
const KEY_KP_7 = 327
const KEY_KP_8 = 328
const KEY_KP_9 = 329
const KEY_KP_DECIMAL = 330
const KEY_KP_DIVIDE = 331
const KEY_KP_MULTIPLY = 332
const KEY_KP_SUBTRACT = 333
const KEY_KP_ADD = 334
const KEY_KP_ENTER = 335
const KEY_KP_EQUAL = 336
const KEY_LEFT_SHIFT = 340
const KEY_LEFT_CONTROL = 341
const KEY_LEFT_ALT = 342
const KEY_LEFT_SUPER = 343
const KEY_RIGHT_SHIFT = 344
const KEY_RIGHT_CONTROL = 345
const KEY_RIGHT_ALT = 346
const KEY_RIGHT_SUPER = 347
const KEY_MENU = 348
const KEY_LAST = KEY_MENU

export const keyMap: {[name: string]: number} = {
  Backspace: KEY_BACKSPACE,
  Tab: KEY_TAB,
  Enter: KEY_ENTER,
  ShiftLeft: KEY_LEFT_SHIFT,
  ShiftRight: KEY_RIGHT_SHIFT,
  ControlLeft: KEY_LEFT_CONTROL,
  ControlRight: KEY_RIGHT_CONTROL,
  AltLeft: KEY_LEFT_ALT,
  AltRight: KEY_RIGHT_ALT,
  Pause: KEY_PAUSE,
  CapsLock: KEY_CAPS_LOCK,
  Escape: KEY_ESCAPE,
  Space: KEY_SPACE,
  PageUp: KEY_PAGE_UP,
  PageDown: KEY_PAGE_DOWN,
  End: KEY_END,
  Home: KEY_HOME,
  ArrowLeft: KEY_LEFT,
  ArrowUp: KEY_UP,
  ArrowRight: KEY_RIGHT,
  ArrowDown: KEY_DOWN,
  PrintScreen: KEY_PRINT_SCREEN,
  Insert: KEY_INSERT,
  Delete: KEY_DELETE,
  Digit0: KEY_0,
  Digit1: KEY_1,
  Digit2: KEY_2,
  Digit3: KEY_3,
  Digit4: KEY_4,
  Digit5: KEY_5,
  Digit6: KEY_6,
  Digit7: KEY_7,
  Digit8: KEY_8,
  Digit9: KEY_9,
  KeyA: KEY_A,
  KeyB: KEY_B,
  KeyC: KEY_C,
  KeyD: KEY_D,
  KeyE: KEY_E,
  KeyF: KEY_F,
  KeyG: KEY_G,
  KeyH: KEY_H,
  KeyI: KEY_I,
  KeyJ: KEY_J,
  KeyK: KEY_K,
  KeyL: KEY_L,
  KeyM: KEY_M,
  KeyN: KEY_N,
  KeyO: KEY_O,
  KeyP: KEY_P,
  KeyQ: KEY_Q,
  KeyR: KEY_R,
  KeyS: KEY_S,
  KeyT: KEY_T,
  KeyU: KEY_U,
  KeyV: KEY_V,
  KeyW: KEY_W,
  KeyX: KEY_X,
  KeyY: KEY_Y,
  KeyZ: KEY_Z,
  MetaLeft: KEY_LEFT_SUPER,
  MetaRight: KEY_RIGHT_SUPER,
  ContextMenu: KEY_MENU,
  Numpad0: KEY_KP_0,
  Numpad1: KEY_KP_1,
  Numpad2: KEY_KP_2,
  Numpad3: KEY_KP_3,
  Numpad4: KEY_KP_4,
  Numpad5: KEY_KP_5,
  Numpad6: KEY_KP_6,
  Numpad7: KEY_KP_7,
  Numpad8: KEY_KP_8,
  Numpad9: KEY_KP_9,
  NumpadMultiply: KEY_KP_MULTIPLY,
  NumpadAdd: KEY_KP_ADD,
  NumpadSubtract: KEY_KP_SUBTRACT,
  NumpadDecimal: KEY_KP_DECIMAL,
  NumpadDivide: KEY_KP_DIVIDE,
  NumpadEnter: KEY_KP_ENTER,
  F1: KEY_F1,
  F2: KEY_F2,
  F3: KEY_F3,
  F4: KEY_F4,
  F5: KEY_F5,
  F6: KEY_F6,
  F7: KEY_F7,
  F8: KEY_F8,
  F9: KEY_F9,
  F10: KEY_F10,
  F11: KEY_F11,
  F12: KEY_F12,
  NumLock: KEY_NUM_LOCK,
  ScrollLock: KEY_SCROLL_LOCK,
  Semicolon: KEY_SEMICOLON,
  Equal: KEY_EQUAL,
  Comma: KEY_COMMA,
  Minus: KEY_MINUS,
  Period: KEY_PERIOD,
  Slash: KEY_SLASH,
  Backquote: KEY_GRAVE_ACCENT,
  BracketLeft: KEY_LEFT_BRACKET,
  Backslash: KEY_BACKSLASH,
  BracketRight: KEY_RIGHT_BRACKET,
  Quote: KEY_APOSTROPHE,
  IntlBackslash: KEY_WORLD_1
}