import {useState, useMemo} from 'react';
import './background.css';
import './style.css';

var messages = {
	items: {},
	render: function(){
		var msgs = [];
		for (var i in this.items){
			if (this.items[i])
				msgs.push(this.items[i])
		}
		return msgs;
	}
};
var item = 0;

function MessageCreator() {
	const [messageList, setMsgList] = useState([]);
	const [image, setImage] = useState(null);

	const preview = useMemo(
		() => {
			return image ? URL.createObjectURL(image): null;
		},
		[image]
	)

	return (
		<section>
			<div id="login">
				<form onSubmit={(e) => {
					e.preventDefault();

					messages.items[item] = {
						perfil: image,
						username: e.target[1].value,
						text: e.target[2].value,
						id: item
					};

					console.log(messageList)
					setMsgList(messages.render());
					console.log(messageList)
					item ++;
				}}>
					<label htmlFor="perfil" className="perfil"
						style={
							{backgroundImage: `url(${preview})`
						}}>
						<input type="file" name="perfil" id="perfil"
							onChange={
								e => setImage(e.target.files[0])
						}/>
						<img src="https://img.icons8.com/fluent-systems-filled/50/000000/stack-of-photos.png" alt=""/>
					</label>

					<input type="text" placeholder="username" className="user" name="user" id="user" defaultValue=""/>

					<textarea type="text" placeholder="text" className="text" name="text" id="text"></textarea>
					<input type="submit"/>
				</form>
			</div>
			<Feed messageList={messageList} onDelete={() => {
				setMsgList(messages.render());
			}}/>
		</section>
	);
}

function Feed(props){
	const [className, setClass] = useState("hidden");
	return (
		<div className={className} id="feed">{
				props.messageList.map((i) => {
				return (
					<div className="message">
						<button className="close" onClick={() => {
							if (messages.items.hasOwnProperty(i.id))
								delete messages.items[i.id];
							props.onDelete();
							if (messages.items.length>0)
								setClass("hidden");
							}}>
							<span>X</span>
						</button>
						<div className="content">
							<p className="user"><strong>{
								i.username
								}</strong>:</p>

							<div className="perfil-div">
								<img className="perfil-image" src={
									i.perfil ? URL.createObjectURL(i.perfil):
										null
									} alt=""/>
							</div>

							<div>
								<textarea className="text">{
									i.text
									}</textarea>
							</div>
						</div>
					</div>
				);
			})
			}</div>
	);
}

function App() {
	return (
		<MessageCreator/>
	);
}

export default App;
