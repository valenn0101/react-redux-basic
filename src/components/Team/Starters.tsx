import { connect } from "react-redux";

import field from "../../styles/cancha.svg";

type Player = {
  id: number;
  name: string;
  photo: string;
};

type PlayersProps = {
  starters: Player[];
  removePlayer: (player: Player) => void;
};

const Starters: React.FC<PlayersProps> = ({ starters, removePlayer }) => {
  return (
    <section>
      <h2>Starters</h2>
      <div className="field">
        {starters.map(player => (
          <article key={player.id} className="starter">
            <div>
              <img src={player.photo} alt={player.name} />
              <button onClick={() => removePlayer(player)}>X</button>
            </div>
            <p>{player.name}</p>
          </article>
        ))}
        <img src={field} alt="field" />
      </div>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    starters: state.starters,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    removePlayer: (player: Player) =>
      dispatch({ type: "REMOVE_STARTER", payload: player }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Starters);
