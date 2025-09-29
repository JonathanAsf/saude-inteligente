        const dz = document.getElementById('dropzone');
        const input = document.getElementById('fileInput');
        const dzDefault = document.getElementById('dzDefault');
        const dzConfirm = document.getElementById('dzConfirm');
        const dzFilename = document.getElementById('dzFilename');
        const btnSend = document.getElementById('btnSend');
        const btnChange = document.getElementById('btnChange');

        const state = { file: null };

        const bytes = (n) => {
            const units = ['B', 'KB', 'MB', 'GB']; let i = 0;
            while (n >= 1024 && i < units.length - 1) { n /= 1024; i++; }
            return `${n.toFixed(i ? 1 : 0)} ${units[i]}`;
        };

        function showConfirm(file) {
            state.file = file;
            dzFilename.textContent = `${file.name} • ${bytes(file.size)}`;
            dz.classList.add('is-ready'); // troca de estado (CSS)
            dzDefault.classList.add('hidden');
            dzConfirm.classList.remove('hidden');
        }

        function resetDropzone() {
            state.file = null;
            input.value = ''; // limpa seleção
            dz.classList.remove('is-ready');
            dzConfirm.classList.add('hidden');
            dzDefault.classList.remove('hidden');
        }

        function handleFiles(list) {
            const [file] = list || [];
            if (!file) return;
            showConfirm(file);
        }

        // Drag & Drop
        const enter = (e) => { e.preventDefault(); dz.classList.add('is-dragover'); };
        const leave = (e) => { e.preventDefault(); dz.classList.remove('is-dragover'); };
        ['dragenter', 'dragover'].forEach(ev => dz.addEventListener(ev, enter));
        ['dragleave', 'dragend', 'drop'].forEach(ev => dz.addEventListener(ev, leave));
        dz.addEventListener('drop', (e) => {
            e.preventDefault();
            handleFiles(e.dataTransfer?.files);
        });

        dz.addEventListener('click', (e) => {
            
            if (!dz.classList.contains('is-ready')) input.click();
        });
        dz.addEventListener('keydown', (e) => {
            if ((e.key === 'Enter' || e.key === ' ') && !dz.classList.contains('is-ready')) {
                e.preventDefault(); input.click();
            }
        });

        input.addEventListener('change', (e) => handleFiles(e.target.files));

        btnChange.addEventListener('click', resetDropzone);
        btnSend.addEventListener('click', async () => {
            if (!state.file) return;

            dz.classList.add('is-success');
            btnSend.disabled = true;
            btnSend.textContent = 'Enviando...';
            
            setTimeout(() => {
                btnSend.textContent = 'Enviar';
                btnSend.disabled = false;
                dz.classList.remove('is-success');
                alert('Arquivo enviado para análise!');
                resetDropzone();
            }, 1200);
        });