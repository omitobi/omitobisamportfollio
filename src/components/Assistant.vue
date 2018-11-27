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
      :showEmoji='true'
      :showFile='false'
      :showTypingIndicator='showTypingIndicator'
      :colors='colors'
      :alwaysScrollToBottom='alwaysScrollToBottom'
      :messageStyling='messageStyling'>
    </beautiful-chat>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Assistant',
  components: {},
  data () {
    return {
      participants: [
        {
          id: 'Omitobisam',
          name: 'Omitobisam',
          imageUrl: require('../assets/omitobisam_.jpeg')
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [
        {
          type: 'text',
          author: `Omitobisam`,
          data: {
            text: `Hi, Welcome to my portfolio.\n Please shoot your questions.`,
            meta: moment().format('DD-MM-YYYY m:h:s a')
          },
          suggestions: ['Looks good!', 'It\'s OK.', 'Uhh.. Do I really have to say something?', 'This suggestion is way too long for css purpose. Lets make it long... Longer, and more and more.. Never ending.']
        }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
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
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'me', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ]
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    }
  }
}
</script>

<style scoped>

</style>
