/**
 * @description 音乐盒曲目选择器
 * @author weiqsctj-清时
 * @date 2022-01-19
 * @module MusicBox
 */

// 模块封装
(function(window) {
    'use strict';

    // DOM元素引用
    const elements = {
        checkboxes: document.querySelectorAll('.song-checkbox'),
        countValue: document.querySelector('.count-value'),
        allSelectBtn: document.getElementById('allSelect'),
        cancelSelectBtn: document.getElementById('cancelSelect'),
        reverseSelectBtn: document.getElementById('reverseSelect')
    };

    /**
     * 更新选中计数
     */
    function updateCount() {
        let count = 0;
        elements.checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) count++;
        });
        elements.countValue.textContent = count;
    }

    /**
     * 全选
     */
    function selectAll() {
        elements.checkboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
        updateCount();
    }

    /**
     * 取消选中
     */
    function cancelAll() {
        elements.checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
        updateCount();
    }

    /**
     * 反选
     */
    function reverseSelect() {
        elements.checkboxes.forEach(function(checkbox) {
            checkbox.checked = !checkbox.checked;
        });
        updateCount();
    }

    /**
     * 初始化事件绑定
     */
    function initEvents() {
        // 按钮事件
        elements.allSelectBtn.addEventListener('click', selectAll);
        elements.cancelSelectBtn.addEventListener('click', cancelAll);
        elements.reverseSelectBtn.addEventListener('click', reverseSelect);

        // 复选框变化事件
        elements.checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', updateCount);
        });
    }

    /**
     * 初始化模块
     */
    function init() {
        initEvents();
        updateCount();
    }

    // 暴露公共方法（方便Vue调用）
    window.MusicBox = {
        init: init,
        selectAll: selectAll,
        cancelAll: cancelAll,
        reverseSelect: reverseSelect,
        updateCount: updateCount
    };

    // DOM加载完成后自动初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})(window);