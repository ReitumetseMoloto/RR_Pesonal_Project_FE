<!-- Popup.svelte -->
<script>
    /**
   * @type {any}
   */
     export let message;
    /**
   * @type {() => void}
   */
     export let onClose;
  
    function closePopup() {
      onClose();
    }
  </script>
  
  <div class="popup-container">
    <div class="popup">
      <p>{message}</p>
      <button on:click={closePopup}>Close</button>
    </div>
  </div>
  
  <style>
    /* Add your custom styles for the pop-up here */
    .popup-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .popup {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
    }
  </style>
  