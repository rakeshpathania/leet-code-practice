import express from 'express';
import {result,test, getAge} from './practice.js';
const router = express.Router();


// router.get('/roman-int', practice.romanToInt);
// router.get('/is-palindrome', practice.isPalindrome);
// router.get('/is-vowel', practice.isVowel);
// router.post('/addition', practice.addTwoNumber);
// router.post('/isOddEven', practice.isOddEven);
// router.post('/duplicate', practice.duplicate);
// router.post('/median', practice.median);
// router.post('/longPalindrome', practice.longPalindrome);
router.get('/constructor', (req, res) =>  res.send(result.show()));
router.get('/getage', getAge);









export const ApiRoute = router;
