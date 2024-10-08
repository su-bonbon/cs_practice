class Solution {
public:
    string mergeAlternately(string word1, string word2) 
    {
        int i = 0;
        int j = 0;
        string result = ";

        while (i < word1.length || j < word2.length) 
        {
            result += word1[i];
            i++;
            result += word2[j];
            j++;
        }
        while ( i < word1.length) {
            result += word1[i];
            i++;
        }
        while (j < word2.length) {
            result += word2[j];
            j++;
        }
    }
};a