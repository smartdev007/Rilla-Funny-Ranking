# Solution to the technical assessment

Enter a brief explanation of your solution here. Include an explanation about how you structured your code and the approach you took to implementing the feature. Provide an answer to the following question in this file: What will be the next thing you do to expand on this feature and why?

# Code Structure

I have made most important changes in two files, `FunnyRankings.js` and `user_rank.js` which is a new file that I created.

# Approach to the problem

So main thing about this problem was to figure out how I am going to caluclate the rating for each user. First thought that I had in my mind was to calculate the rating for each user based on the given boolean value of `funny` parameter of `sentences` array of the object inside `data.json` file. But I wanted to try a different approach to this challenge. Basically, I am calculating the rank based on how many conversations a sales rep is having with how many customers. More customers with more conversations, more is their ranking.

So there are two criteria to calculate the rank. One is for keywords and the other one is for sentences.

`great: 5`
`better: 4`
`good: 3`
`ok: 2`

`conversations: 10`
`sentences: 9`
`customers: 8`
`words: 6`

These weights make ranking value per user.

For example, let's say user A has

`conversation: 25,`
`sentences: 300,`
`customers: 6,`
`words: 1200`

Then ranking for user A is calculated as: `25*10 + 300*9 + 6*8 + 1200*6` with addition of keywords count

# Next step

To expand onto this feature, I would also add `sales` parameter in the `data.js` which will show if a user was succussful to make the sale. This would also give us the analytics of total sales relative to funnier sales rep.