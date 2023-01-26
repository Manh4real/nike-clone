import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import api from "api";
import { useSelector } from "react-redux";

const initialState = {
  status: "idle",
  error: null,
  data: {},
};

export const fetchUser = createAsyncThunk("user/fetchUser", async function () {
  const id = JSON.parse(localStorage.getItem("currentUser_Redux"));

  if (id) {
    console.log("??");
    let response;
    try {
      const res = await api.get(`users/${id}`);
      response = res.data;
    } catch (err) {
      console.log("Fetch user error: ", err.message);
      response = null;
    }

    return response;
  } else {
    return null;
  }
});
export const signIn = createAsyncThunk(
  "user/signIn",
  async function (partialPayload) {
    const response = await api.get("/users");

    const users = response.data;
    const { email, password } = partialPayload;

    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    return user;
  }
);
export const signUp = createAsyncThunk(
  "user/signUp",
  async function (partialPayload) {
    const response = await api.get("/users");
    const users = response.data;
    const check = users.some((u) => u.email === partialPayload.email);

    if (check) return null;

    const newUser = {
      ...partialPayload,
      id: nanoid(),
      registrationTime: Date.now(),
      favorites: [],
      bag: [],
    };
    const response2 = await api.post("/users", newUser);
    // return response2.data;
    console.log(response2);

    return newUser;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initUser: (state, action) => {
      state.data.name = action.payload.name;
      state.data.bag = action.payload.bag;
      state.data.favorites = action.payload.favorites;
      state.data.registrationTime = action.payload.registrationTime;

      localStorage.setItem(
        "currentUser_Redux",
        JSON.stringify(action.payload.id)
      );
    },
    logOut: (state) => {
      state.data = {};
      localStorage.setItem("currentUser_Redux", JSON.stringify(null));
    },
    updateFavorites: {
      reducer: (state, action) => {
        const c = state.data.favorites.some((p) => p.id === action.payload.id);

        if (c) {
          alert("Product have been saved to Favorites. (Redux)");
          return state;
        }

        state.data.favorites.push(action.payload);
        alert("Added to Favorites. (Redux)");
      },
      prepare: (payload) => {
        // payload.added.favoriteId = nanoid();
        // return { payload };
        return {
          payload: {
            ...payload,
            added: {
              ...payload.added,
              favoriteId: nanoid(),
            },
          },
        };
      },
    },
    removeFavorites: (state, action) => {
      alert("Removed favorites. (Redux)");
      state.data.favorites = state.data.favorites.filter(
        (p) => !action.payload.includes(p.added.favoriteId)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";

        if (!action.payload) return state;

        updateInfo(state, action);
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        if (!action.payload) {
          alert("Invalid Email or Password.");
          state.status = "error";
          return state;
        }
        state.status = "succeeded";
        updateInfo(state, action);
      })
      .addCase(signUp.fulfilled, (state, action) => {
        if (!action.payload) {
          alert("Account already exists.");
          state.status = "error";
          return state;
        }
        state.status = "succeeded";
        updateInfo(state, action);
      });
  },
});

const updateInfo = (state, action) => {
  state.data = {
    name: action.payload.name,
    bag: action.payload.bag,
    favorites: action.payload.favorites,
    registrationTime: action.payload.registrationTime,
  };

  localStorage.setItem("currentUser_Redux", JSON.stringify(action.payload.id));
};

export const selectFavorites = (state) => state.user.data.favorites;
export const selectUserName = (state) => state.user.data.name;
export const selectUser = (state) => state.user.data;
export const selectUserAll = (state) => state.user;
export const selectUserStatus = (state) => state.user.status;
export const useIsLoggedIn = () => {
  const user = useSelector(selectUser);

  return Object.keys(user).length > 0;
};
export const useUserStatusLoading = () => {
  const userStatus = useSelector(selectUserStatus);
  return userStatus === "loading";
};
export const { updateFavorites, removeFavorites, initUser, logOut } =
  userSlice.actions;

export default userSlice.reducer;
