def longestSubstr(s):
    l, r = 0, 0
    itr = 0
    seen = set()
    max_len = 0
    while r < len(s):
        while s[l] in seen and l < r:
            seen.remove(s[l])
            l += 1
        seen.add(s[r])
        print("l",l,"r",r,"seen",seen)
        max_len = max(max_len, r - l + 1)
        r += 1
    return max_len

print(longestSubstr("abcabcbb"))
