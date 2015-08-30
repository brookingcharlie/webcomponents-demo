# Shadow DOM demo

Simple example showing usage of Shadow DOM.

## About Shadow DOM

Shadow DOM supports the encapsulation of node trees representing components.
With Shadow DOM, any element in a node tree can host a *shadow tree*, which
has its own *shadow root* as opposed to descending from the document node.
Without this encapsulation, styles and scripts intended for other parts of
the document could impact upon the component, particularly given that element
IDs and class names can clash.

## References

* <http://w3c.github.io/webcomponents/spec/shadow/>
* <http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/>
* <http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom-201/>
* <http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom-301/>
