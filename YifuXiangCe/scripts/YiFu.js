/**
 * @description 服饰相册组件
 * @author weiqsctj-清时
 * @date 2022-01-19
 * @module Gallery
 */

(function(window) {
    'use strict';

    // DOM元素引用
    const elements = {
        bigImg: document.getElementById('bigImg'),
        thumbnailItems: document.querySelectorAll('.thumbnail-item'),
        imageCounter: document.querySelector('.image-counter'),
        infoTitle: document.getElementById('infoTitle')
    };

    // 图片数据
    const images = [
        { src: 'images/1.jpg', title: '款式 01' },
        { src: 'images/2.jpg', title: '款式 02' },
        { src: 'images/3.jpg', title: '款式 03' },
        { src: 'images/4.jpg', title: '款式 04' },
        { src: 'images/5.jpg', title: '款式 05' },
        { src: 'images/6.jpg', title: '款式 06' }
    ];

    /**
     * 更新大图显示
     * @param {number} index - 图片索引
     */
    function updatePreview(index) {
        const image = images[index];
        
        // 添加淡出效果
        elements.bigImg.style.opacity = '0';
        
        setTimeout(function() {
            // 更新图片src
            elements.bigImg.setAttribute('src', image.src);
            
            // 图片加载完成后显示
            elements.bigImg.onload = function() {
                elements.bigImg.style.opacity = '1';
            };
            
            // 更新计数器
            elements.imageCounter.textContent = (index + 1) + ' / ' + images.length;
            
            // 更新标题
            elements.infoTitle.textContent = image.title;
        }, 150);
    }

    /**
     * 移除所有激活状态
     */
    function clearActive() {
        elements.thumbnailItems.forEach(function(item) {
            item.classList.remove('active');
        });
    }

    /**
     * 初始化事件绑定
     */
    function initEvents() {
        elements.thumbnailItems.forEach(function(item, index) {
            item.addEventListener('click', function() {
                // 移除所有激活状态
                clearActive();
                
                // 添加当前激活状态
                item.classList.add('active');
                
                // 更新预览
                updatePreview(index);
            });

            // 鼠标悬停效果
            item.addEventListener('mouseenter', function() {
                item.style.transform = 'translateX(8px)';
            });

            item.addEventListener('mouseleave', function() {
                if (!item.classList.contains('active')) {
                    item.style.transform = 'translateX(0)';
                }
            });
        });
    }

    /**
     * 初始化
     */
    function init() {
        initEvents();
    }

    // 暴露公共方法
    window.Gallery = {
        init: init,
        updatePreview: updatePreview
    };

    // DOM加载完成后自动初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})(window);