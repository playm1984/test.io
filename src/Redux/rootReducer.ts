type Item = {
  id: number;
  bg: string;
  photo: string;
  isPhoto: boolean;
};

type State = {
  items: Item[];
  curPage: number;
};

type Action<T extends string, P> = {
  type: T;
  payload?: P;
};

type AddItem = Action<"ADD_ITEM">;

type AddPhoto = Action<"ADD_PHOTO", { droppedItem: string; page: number }>;

type RemovePhoto = Action<"REMOVE_PHOTO">;

type CurrentPage = Action<"CURRENT_PAGE", number>;

type AddBG = Action<"ADD_BG", string>;

type Actions = AddItem | AddPhoto | CurrentPage | AddBG | RemovePhoto;

const inistialState: State = {
  items: [{ id: 1, bg: "", photo: "", isPhoto: false }],
  curPage: 1,
};

const rootReducer = (state: State = inistialState, action: Actions): State => {
  switch (action.type) {
    case "ADD_ITEM": {
      const lastId = state.items[state.items.length - 1].id;
      return {
        ...state,
        items: [
          ...state.items,
          { id: lastId + 1, bg: "", photo: "", isPhoto: false },
        ],
      };
    }

    case "ADD_PHOTO": {
      const { droppedItem, page } = action.payload;
      return {
        ...state,
        items: state.items.map((el) =>
          el.id === page ? { ...el, photo: droppedItem, isPhoto: true } : el
        ),
      };
    }

    case "REMOVE_PHOTO": {
      return {
        ...state,
        items: state.items.map((el) => ({ ...el, photo: "", isPhoto: false })),
      };
    }

    case "CURRENT_PAGE": {
      const { payload } = action;
      return {
        ...state,
        curPage: payload,
      };
    }

    case "ADD_BG": {
      const { payload } = action;
      return {
        ...state,
        items: state.items.map((el) =>
          el.id === state.curPage ? { ...el, bg: payload } : el
        ),
      };
    }

    default:
      return state;
  }
};

export { rootReducer };
