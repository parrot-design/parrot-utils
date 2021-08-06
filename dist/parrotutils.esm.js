//取合法的边界值
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

export { clamp };
