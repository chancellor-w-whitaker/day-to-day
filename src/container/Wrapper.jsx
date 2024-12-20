import RemoteComponent from "../components/RemoteComponent";

const object = {
  github: "https://raw.githubusercontent.com/chamce/remote/refs/heads/master/docs/remote.cjs",
  localhost: "http://localhost:5001/remote.cjs",
};

const Wrapper = ({ url, ...rest }) => <RemoteComponent url={object.github} {...rest}></RemoteComponent>;

export default Wrapper;
