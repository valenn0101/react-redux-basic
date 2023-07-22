import { Provider } from "react-redux";

import Players from "@/components/players";
import Team from "@/components/Team/Team";
import store from "@/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <h1>Football Manager 2023</h1>
        <Players />
        <Team />
      </main>
    </Provider>
  );
}
