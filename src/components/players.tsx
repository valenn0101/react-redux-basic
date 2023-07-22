import { connect } from "react-redux";
import { Dispatch } from "redux";

type Player = {
  id: number;
  name: string;
  photo: string;
};

type PlayersProps = {
  players: Player[];
  addSubtitute: (player: Player) => void;
  addStarter: (player: Player) => void;
};

const Players: React.FC<PlayersProps> = ({
  players,
  addStarter,
  addSubtitute,
}) => {
  return (
    <section>
      <h2>Players</h2>
      <div className="players-container">
        {players.map(player => (
          <article key={player.id} className="player">
            <img src={player.photo} alt={player.name} />
            <h3>{player.name}</h3>
            <div>
              <button onClick={() => addStarter(player)}>Starter</button>
              <button onClick={() => addSubtitute(player)}>Substitute</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    players: state.players,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addStarter(player: Player) {
    dispatch({
      type: "ADD_STARTER",
      payload: player,
    });
  },
  addSubtitute(player: Player) {
    dispatch({
      type: "ADD_SUBTITUTE",
      payload: player,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
