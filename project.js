// Copyright© 2019 By Fajar Firdaus
var warna = require('colors');
var box = require("boxen");
var js = require("jsome");

js([{"Coder" : "Fajar Firdaus", "FB" : "Fajar Firdaus", "IG" : "fajar_firdaus", "YT" : "iTech7732"}]);

var listQuotes = ["[ 80% of Computer Science is detective work. You have to investigate to determine what did and didn't happen and why. -Tom Bredemeier ]", 
             "[ Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. -Linus Torvalds ]",
             "[ The idea that I can be presented with a problem, set out to logically solve it with the tools at hand, and wind up with a program that could not be legally used because someone else followed the same logical steps some years ago and filed for a patent on it is horrifying. -John Carmack ]",
             "[ Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it? -Brian Kernighan ]",
             "[ Simple is better than complex. Complex is better than complicated. -Tim Peters ]",
             "[ Every good Programmers are start from Noobgrammers. -Naufal Yudhistira ]",
             "[ Any fool can write code that a computer can understand. Good programmers write code that humans can understand -Martin Fowler ]",
             "[ Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. -John woods ]",
             "[ A language that doesn't affect the way you think about programming is not worth knowing. Alan J. -Perlis ]",
             "[ Everybody in this country should learn to program a computer, because it teaches you how to think! -Steve Jobs ]",
             "[ When debugging, novices insert corrective code; experts remove defective code. -Richard Pattis ]",
             "[ Before software can be reusable it first has to be usable. -Ralph Johnson ]",
             "[ Enlightenment is the unprogrammed state. -Jed McKenna ]",
             "[ Walking on water and developing software from a specification are easy if both are frozen. -Edward V Berard ]",
             "[ Programming isn't about what you know; it's about what you can figure out. -Chris Pine ]",
             "[ The question of whether a computer can think is no more interesting than the question of whether a submarine can swim. -Edsger Dijkstra ]",
             "[ Debugging is like being the detective in a crime movie where you are also the murderer. -Filipe Fortes] ",
             "[ when you don't create things, you become defined by your tastes rather than ability. ... ]",
             "[ Without requirements and design, programming is the art of adding bugs to an empty text file. -Louis Srygley] "];
console.log("\n")             
console.log(warna.green(box("[ Result ]", {padding: 1})));
console.log("\n")
console.log(warna.blue(listQuotes[Math.floor(Math.random() * listQuotes.length)]));