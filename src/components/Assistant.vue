<template>
  <div>
    <beautiful-chat
      :participants='participants'
      :titleImageUrl='titleImageUrl'
      :onMessageWasSent='onMessageWasSent'
      :messageList='messageList'
      :newMessagesCount='newMessagesCount'
      :isOpen='isChatOpen'
      :close='closeChat'
      :open='openChat'
      :showEmoji='false'
      :showFile='false'
      :showTypingIndicator='showTypingIndicator'
      :colors='colors'
      :alwaysScrollToBottom='alwaysScrollToBottom'
      :messageStyling='messageStyling'>
    </beautiful-chat>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Assistant',
  components: {},
  data () {
    return {
      discuss: '',
      participants: [
        {
          id: 'Omitobisam',
          name: 'Omitobisam',
          imageUrl: require('../assets/omitobisam_.jpeg')
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: 'darkorchid',
          text: '#ffffff'
        },
        launcher: {
          bg: 'darkorchid'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: true, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    }
  },
  methods: {
    sendMessage (text) {
      if (text.trim().length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1;
        this.onMessageWasSent({
          type: 'text',
          author: `me`,
          data: {
            text: text,
            meta: moment().format('DD-MM-YYYY m:h:s a')
          },
          suggestions: ['Looks good!']
        });
      }
    },
    onMessageWasSent (message) {
      if (message.data.text.trim().length > 0) {
        // called when the user sends a message
        this.messageList = [ ...this.messageList, message ];
        this.requestReply(message);
      }
    },
    requestReply (message) {
      this.showTyping('Omitobisam');
      window.axios.post('https://dev.omitobisam.com/api/message', {text: message.data.text, discuss: self.discuss})
        .then(({data}) => {
          this.addMessageToList({...data.response, suggestions: ['What is your email?', 'What is your phone number?']});
          this.discuss = data.discuss;
        }).catch(({response}) => {
        // eslint-disable-next-line no-console
          console.log(response);
          const message_ = {
            type: 'text',
            author: `Omitobisam`,
            data: {
              text: `Hi. Can't quite give you the right response right now. I'll be right back.`,
              meta: moment().format('DD-MM-YYYY HH:m:s a')
            }
          };
          this.addMessageToList(message_);
        }).then(() => {
          this.showTyping('');
        })
    },
    addMessageToList (message) {
      this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1;
      this.messageList.push(message);
    },
    showTyping (forUser = '') {
      this.showTypingIndicator = forUser
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    }
  },
  created () {
    this.requestReply({data: {text: ''}});
  }
}
</script>

<style scoped>

</style>
