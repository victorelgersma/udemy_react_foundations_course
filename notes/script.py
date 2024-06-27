
# https://help.obsidian.md/Extending+Obsidian/Obsidian+URI
import urllib.parse

def uri_encode_path(path):
    """
    URI-encodes the given file path.

    Args:
    - path (str): The file path to encode.

    Returns:
    - str: The URI-encoded file path.
    """
    return urllib.parse.quote(path, safe='')

# Example usage
# path = "/home/user/my vault/path/to/my note"
# encoded_path = uri_encode_path(path)
# print(encoded_path)



print('obsidian://open?path='+uri_encode_path('/Users/victor.elgersma41/Documents/courses/udemy/react-crash-course/notes'))



