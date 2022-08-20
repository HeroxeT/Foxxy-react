
export function up(element: Node, selector: string): NodeListOf<Node> {
    const parent = element.parentNode
    const response = parent.querySelectorAll(selector)

    if (response.length > 0) {
        return response;
    }
    if (parent.parentNode) {
        return up(parent, selector);
    }
    return new NodeList();
}
