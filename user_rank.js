// --- Funnier Criteria -----
const keywordsCriteria = {
    great: 5,
    better: 4,
    good: 3,
    ok: 2
  }
  
  const conversationCriteria = {
    conversations: 10,
    sentences: 9,
    customers: 8,
    word: 6
  }
  // --- End
  
  function funnyRankings(user) {
    const _conversations = user.conversations.length * conversationCriteria.conversations;
  
    let customers = 0;
    let sentences = 0;
    let word = 0;
  
    let keywords = {
      great: 0,
      better: 0,
      good: 0,
      ok: 0
    };
  
    user.conversations.forEach(conversation => {
      sentences = sentences + conversation.sentences.length;
      customers = customers + conversation.sentences.filter(st => st.speaker_type === 'customer').length;

      conversation.sentences.forEach(st => {
        word = word + st.sentence.match(/(\w+)/g).length;
      })
  
      Object.keys(keywordsCriteria).forEach(key => {
        conversation.sentences.forEach(st => {
          const count = st.sentence.toLowerCase().search(key);

          if (count !== -1) {
            keywords[key] = keywords[key] + count;
          }
        })
      })
    });

    const _customers = customers * conversationCriteria.customers;
    const _sentences = sentences * conversationCriteria.sentences;
    const _word = word * conversationCriteria.word;

    let _keywords = 0;

    Object.keys(keywords).forEach(key => {
      _keywords = _keywords + keywords[key] * keywordsCriteria[key];
    })
  
    const ranking = _conversations + _customers + _sentences + _word + _keywords;
  
    return ranking;
  }
  
  
  module.exports = {
      funnyRankings
  }