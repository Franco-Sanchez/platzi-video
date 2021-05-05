import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getVideoSource } from "../actions";
import "../assets/styles/containers/Player.scss";

const Player = (props) => {
  const [loading, setLoading] = useState(true);

  const { id } = props.match.params;

  const hasPlaying = Object.keys(props.playing).length > 0;

  const handleBack = () => props.history.goBack();

  useEffect(() => {
    props.getVideoSource(id);
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={handleBack}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Redirect to="/404/" />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispacthToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispacthToProps)(Player);
