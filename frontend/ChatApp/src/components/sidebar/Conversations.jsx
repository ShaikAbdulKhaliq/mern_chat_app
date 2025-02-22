// STARTER CODE SNIPPET
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
const {loading,conversations} =useGetConversations()

	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{!loading ? (
				conversations.map((conversation,idx) => (
					<Conversation 
					key={conversation._id} 
					conversation={conversation} 
					lastIdx={idx===conversations.length-1}
                    emoji={getRandomEmoji()}
					/>
				))
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default Conversations;